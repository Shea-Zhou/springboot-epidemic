package com.rhea.epidemic.handler;

import com.google.gson.Gson;
import com.rhea.epidemic.domain.ProvinceData;
import com.rhea.epidemic.domain.TotalData;
import com.rhea.epidemic.util.HttpUrlConnectionUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @author Administrator Rhea
 * 工具类 读取疫情数据
 */
public class JsonHandler {
    public static void main(String[] args) {
        List<ProvinceData> data = getData();
        TotalData totalData = getTotalData();
        System.out.println(data);
        System.out.println(totalData);
    }
//    public static List<DataBean> getData() throws Exception {
//        FileReader reader = new FileReader("tmp.txt");
//        char[] cBuf = new char[1024];
//        int cRead ;
//        StringBuilder builder = new StringBuilder();
//        while ((cRead=reader.read(cBuf))>0){
//            builder.append(new String(cBuf,0,cRead));
//        }
//        reader.close();
//        //把json格式转换为Java
//        Gson gson = new Gson();
//        Map map = gson.fromJson(builder.toString(), Map.class);
//        //分别获取转换后的内容中的地区名字 疫情统计
//        String data = map.get("data").toString();
//        Map dataMap = gson.fromJson(data, Map.class);
//        //获取地区集合
//        ArrayList list = (ArrayList) dataMap.get("areaTree");
//        //获取中国的数据集合
//        Map areaMap = (Map) list.get(0);
//        //获取省份
//        ArrayList provenceList = (ArrayList) areaMap.get("children");
//        List<DataBean> dataBeanList = new ArrayList<>();
//        //遍历循环省份集合 获取省份的名字
//        for (Object o : provenceList) {
//            Map temp = (Map) o;
//            String name = (String) temp.get("name");
//            Map totalMap = (Map) temp.get("total");
//            double nowConfirm = (double) totalMap.get("nowConfirm");
//            double confirm = (double) totalMap.get("confirm");
//            double heal = (double) totalMap.get("heal");
//            double dead = (double) totalMap.get("dead");
//            DataBean dataBean = new DataBean(name, (int) nowConfirm, (int) confirm, (int) heal, (int) dead);
//            dataBeanList.add(dataBean);
//        }
//        return dataBeanList;
//    }

    /**
     * 获取数据
     * @return 返回数据集合
     */
    public static List<ProvinceData> getData() {
        String urlStr = "https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5";
        String info = HttpUrlConnectionUtil.getInfo(urlStr);
        Gson gson = new Gson();
        Map map = gson.fromJson(info, Map.class);
        System.out.println(map);
        //分别获取转换后的内容中的地区名字 疫情统计
        String data = map.get("data").toString();
        Map dataMap = gson.fromJson(data, Map.class);
        //获取地区集合
        ArrayList list = (ArrayList) dataMap.get("areaTree");
        //获取中国的数据集合
        Map areaMap = (Map) list.get(0);
        System.out.println(areaMap);
        //获取省份
        ArrayList provenceList = (ArrayList) areaMap.get("children");
        List<ProvinceData> provinceDataList;
        provinceDataList = DataHandler.getProvinceData(provenceList);
        return provinceDataList;
    }
    public static TotalData getTotalData() {
        String urlStr = "https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5";
        String info = HttpUrlConnectionUtil.getInfo(urlStr);
        Gson gson = new Gson();
        Map map = gson.fromJson(info, Map.class);
        String data = map.get("data").toString();
        Map dataMap = gson.fromJson(data, Map.class);
        System.out.println();
        Map chinaTotalMap = (Map) dataMap.get("chinaTotal");
        Map chinaAdd = (Map) dataMap.get("chinaAdd");
        System.out.println(chinaTotalMap);
        String lastUpdateTime = (String) dataMap.get("lastUpdateTime");
        double confirm = (Double) chinaTotalMap.get("confirm");
        double heal = (Double) chinaTotalMap.get("heal");
        double dead = (Double) chinaTotalMap.get("dead");
        double nowConfirm = (Double) chinaTotalMap.get("nowConfirm");
        double suspect = (Double) chinaTotalMap.get("suspect");
        double nowSevere = (Double) chinaTotalMap.get("nowSevere");
        double importedCase = (Double) chinaTotalMap.get("importedCase");
        double noInfect = (Double) chinaTotalMap.get("noInfect");
        double addConfirm = (Double) chinaAdd.get("confirm");
        double addHeal = (Double) chinaAdd.get("heal");
        double addDead = (Double) chinaAdd.get("dead");
        double addNowConfirm = (Double) chinaAdd.get("nowConfirm");
        double addSuspect = (Double) chinaAdd.get("suspect");
        double addNowSevere = (Double) chinaAdd.get("nowSevere");
        double addImportedCase = (Double) chinaAdd.get("importedCase");
        double addNoInfect = (Double) chinaAdd.get("noInfect");
        TotalData totalData = new TotalData(lastUpdateTime, (int) confirm, (int) heal, (int) dead,
                (int) nowConfirm, (int) suspect, (int) nowSevere, (int) importedCase, (int) noInfect,
                (int) addConfirm, (int) addHeal,
                (int) addDead, (int) addNowConfirm, (int) addSuspect,
                (int) addNowSevere, (int) addImportedCase, (int) addNoInfect);
        return totalData;
    }
}
