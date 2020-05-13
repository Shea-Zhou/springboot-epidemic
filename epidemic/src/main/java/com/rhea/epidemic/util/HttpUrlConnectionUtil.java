package com.rhea.epidemic.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

/**
 * @author Administrator Rhea
 * 工具类 发送http请求获取响应信息
 */
public class HttpUrlConnectionUtil {
    static String getInfo(String urlStr){
        HttpURLConnection connection;
        InputStream is = null;
        BufferedReader reader = null;
        StringBuilder builder = new StringBuilder();
        try {
            URL url = new URL(urlStr);
            // 通过url打开一个远程连接  强转类型
            connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            // 连接时间和读取时间
            //  连接时间： 发送请求端 连接到  url目标地址端的时间
            //            受到距离长短和网络速度的影响
            //  读取时间： 指连接成功后  获取数据的时间
            //            受到数据量和服务器处理速度的影响
            connection.setConnectTimeout(15000);
            connection.setReadTimeout(60000);
            // 设定请求头参数的方式：如指定接收json数据   服务端的key值为content-type
            connection.setRequestProperty("Accept","application/json");
            // 发送请求
            connection.connect();
            connection.getResponseCode();
            int code = 200;
            if (connection.getResponseCode()!=code){
                //TODO 此处添加异常处理
                return "error code";
            }
            //读取返回的内容
            is = connection.getInputStream();
            reader = new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8));
            String line;
            while ((line=reader.readLine())!=null){
                builder.append(line);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            if (reader!=null){
                try {
                    reader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (is!=null){
                try {
                    is.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return builder.toString();
    }

    public static void main(String[] args) {
        String str = "https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5";
        //String str1 = "https://ncov.dxy.cn/ncovh5/view/pneumonia?scene=2&from=singlemessage&isappinstalled=0";
        String result = getInfo(str);
        System.out.println(result);
    }
}
