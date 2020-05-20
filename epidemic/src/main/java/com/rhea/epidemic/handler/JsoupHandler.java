package com.rhea.epidemic.handler;

import com.google.gson.Gson;
import com.rhea.epidemic.domain.ProvinceData;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Administrator Rhea
 * 使用Jsoup解析响应回来的网页数据
 */
public class JsoupHandler {
    public static List<ProvinceData> getData(){
        String urlStr = "https://ncov.dxy.cn/ncovh5/view/pneumonia?scene=2&from=singlemessage&isappinstalled=0";
        List<ProvinceData> provinceDataList = new ArrayList<>();
        Connection connect = Jsoup.connect(urlStr);
        try {
            Document document = connect.get();
            //获取元素
            Element ele = document.getElementById("getAreaStat");
            //获取元素中的内容
            String data = ele.data();
            // 字符串截取出json格式的数据
            String info = data.substring(data.indexOf("["),data.lastIndexOf("]") + 1);
            Gson gson = new Gson();
            ArrayList arrayList = gson.fromJson(info, ArrayList.class);
            provinceDataList = DataHandler.getProvinceData(arrayList);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return provinceDataList;
    }
}
