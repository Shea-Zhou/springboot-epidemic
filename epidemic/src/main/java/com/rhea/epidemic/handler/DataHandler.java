package com.rhea.epidemic.handler;

import com.rhea.epidemic.domain.CityData;
import com.rhea.epidemic.domain.GraphData;
import com.rhea.epidemic.domain.ProvinceData;
import com.rhea.epidemic.domain.TotalData;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @author Administrator Rhea
 */
public class DataHandler {
    private static Map provinceCompareMap;

    public static List<ProvinceData> getProvinceData(ArrayList provenceList) {
        List<ProvinceData> provinceDataList = new ArrayList<>();
        //遍历循环省份集合 获取省份的名字
        for (int i = 0; i < provenceList.size(); i++) {
            Map temp = (Map) provenceList.get(i);
            String pName = (String) temp.get("name");
            Map todayMap = (Map) temp.get("today");
            double newConfirm = (double) todayMap.get("confirm");
            double confirmCuts = (double) todayMap.get("confirmCuts");
            boolean isUpdate = (boolean) todayMap.get("isUpdated");
            String tip = (String) todayMap.get("tip");
            Map totalMap = (Map) temp.get("total");
            double nowConfirm = (double) totalMap.get("nowConfirm");
            double confirm = (double) totalMap.get("confirm");
            double heal = (double) totalMap.get("heal");
            double dead = (double) totalMap.get("dead");
            double suspect = (double) totalMap.get("suspect");
            String healRate = (String) totalMap.get("healRate");
            String deadRate = (String) totalMap.get("deadRate");
            ArrayList cityList = (ArrayList) temp.get("children");
            ProvinceData compareP = getCompareDate(pName);
            double compareDay = 0;
            double compareNum = 0;
            if (pName.equals(compareP.getName())) {
                compareDay = compareP.getCompareDay();
                compareNum = compareP.getCompareNum();
            }
            ProvinceData provinceData = new ProvinceData(i + 1, pName, (int) nowConfirm, (int) confirm, (int) heal, (int) dead, (int) suspect, (int) newConfirm, (int) confirmCuts, deadRate, healRate, isUpdate, tip, (int) compareDay, (int) compareNum, null);
            List<CityData> cityDataList = getCityData(cityList, provinceData);
            provinceData.setCityDataList(cityDataList);
            provinceDataList.add(provinceData);
        }
        return provinceDataList;
    }

    public static List<CityData> getCityData(ArrayList cityList, ProvinceData provinceData) {
        List<CityData> cityDataList = new ArrayList<>();
        //遍历循环省份集合 获取省份的名字
        int i = 0;
        while (i < cityList.size()) {
            Map temp = (Map) cityList.get(i);
            String cName = (String) temp.get("name");
            Map todayMap = (Map) temp.get("today");
            double newConfirm = (double) todayMap.get("confirm");
            double confirmCuts = (double) todayMap.get("confirmCuts");
            boolean isUpdate = (boolean) todayMap.get("isUpdated");
            Map totalMap = (Map) temp.get("total");
            double nowConfirm = (double) totalMap.get("nowConfirm");
            double confirm = (double) totalMap.get("confirm");
            double heal = (double) totalMap.get("heal");
            double dead = (double) totalMap.get("dead");
            double suspect = (double) totalMap.get("suspect");
            String healRate = (String) totalMap.get("healRate");
            String deadRate = (String) totalMap.get("deadRate");
            String id = provinceData.getId() + "0" + (i + 1);
            CityData cityData = new CityData(Integer.parseInt(id), cName, (int) nowConfirm, (int) confirm, (int) heal, (int) dead, (int) suspect, (int) newConfirm, (int) confirmCuts, deadRate, healRate, isUpdate, provinceData.getId(), provinceData);
            cityDataList.add(cityData);
            i++;
        }
        return cityDataList;
    }

    public static List<GraphData> getGraphData(Map subMap) {
        List<GraphData> graphDataList = new ArrayList<>();
        ArrayList chinaDayList = (ArrayList) subMap.get("chinaDayList");
        ArrayList chinaDayAddList = (ArrayList) subMap.get("chinaDayAddList");
        Map nowConfirmStatistics = (Map) subMap.get("nowConfirmStatis");
        provinceCompareMap = (Map) subMap.get("provinceCompare");
        System.out.println(chinaDayAddList.size());
        System.out.println(chinaDayList.size());
        int size1 = chinaDayList.size();
        int size2 = chinaDayAddList.size();
        int count = 7;
        if (size1 - size2 < count) {
            count = size1 - size2;
        }
        for (int i = 0; i < (chinaDayAddList.size() + count); i++) {
            Map temp = (Map) chinaDayList.get(i);
            String date = (String) temp.get("date");
            double nowConfirm = (Double) temp.get("nowConfirm");
            double nowSuspect = (Double) temp.get("suspect");
            double nowSevere = (Double) temp.get("nowSevere");
            double grossConfirm = (Double) temp.get("confirm");
            double grossDead = (Double) temp.get("dead");
            double grossHeal = (Double) temp.get("heal");
            String deadRate = (String) temp.get("deadRate");
            String healRate = (String) temp.get("healRate");
            double noInfect = (Double) temp.get("noInfect");
            double grossImportCase = (Double) temp.get("importedCase");
            double newConfirm = 0;
            double newSuspect = 0;
            double newImportCase = 0;
            double gat = 0;
            double importCase = 0;
            double province = 0;
            if (i >= 7) {
                Map tmp = (Map) chinaDayAddList.get(i - count);
                newConfirm = (Double) tmp.get("confirm");
                newSuspect = (Double) tmp.get("suspect");
                newImportCase = (Double) tmp.get("importedCase");
            }
            if (i == (chinaDayAddList.size() + count - 1)) {
                gat = (Double) nowConfirmStatistics.get("gat");
                importCase = (Double) nowConfirmStatistics.get("import");
                province = (Double) nowConfirmStatistics.get("province");
            }
            GraphData graphData = new GraphData(i + 1, date, (int) nowConfirm, (int) newConfirm, (int) nowSuspect, (int) newSuspect, (int) nowSevere, (int) grossConfirm, (int) grossHeal, (int) grossDead, deadRate, healRate, (int) grossImportCase, (int) newImportCase, (int) noInfect, (int) gat, (int) importCase, (int) province);
            graphDataList.add(graphData);
        }
        return graphDataList;
    }

    public static ProvinceData getCompareDate(String nameP) {
        ProvinceData p = new ProvinceData();
        Map tempMap = (Map) provinceCompareMap.get(nameP);
        double compareDay = (double) tempMap.get("zero");
        double compareNum = (double) tempMap.get("confirmAdd");
        p.setCompareDay((int) compareDay);
        p.setName(nameP);
        p.setCompareNum((int) compareNum);
        return p;
    }

}
