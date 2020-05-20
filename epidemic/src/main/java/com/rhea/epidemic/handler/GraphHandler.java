package com.rhea.epidemic.handler;

import com.google.gson.Gson;
import com.rhea.epidemic.domain.GraphData;
import com.rhea.epidemic.util.HttpClientUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @author Administrator Rhea
 */
public class GraphHandler {
    public static List<GraphData> getData() {
        List<GraphData> graphDataList = new ArrayList<>();
        String urlStr = "https://view.inews.qq.com/g2/getOnsInfo?name=disease_other";
        String info = HttpClientUtil.doGet(urlStr);
        Gson gson = new Gson();
        Map map = gson.fromJson(info, Map.class);
        String subStr = (String) map.get("data");
        Map subMap = gson.fromJson(subStr, Map.class);
        System.out.println(subMap);
        graphDataList = DataHandler.getGraphData(subMap);
        return graphDataList;
    }

    public static void main(String[] args) {
        getData();
    }
}
