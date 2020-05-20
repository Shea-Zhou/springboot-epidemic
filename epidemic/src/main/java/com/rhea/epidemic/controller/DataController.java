package com.rhea.epidemic.controller;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.google.gson.Gson;
import com.rhea.epidemic.domain.CityData;
import com.rhea.epidemic.domain.GraphData;
import com.rhea.epidemic.domain.ProvinceData;
import com.rhea.epidemic.domain.TotalData;
import com.rhea.epidemic.service.BaseCityDataService;
import com.rhea.epidemic.service.BaseGraphDataService;
import com.rhea.epidemic.service.BaseProvinceDataService;
import com.rhea.epidemic.service.BaseTotalDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Administrator Rhea
 * 处理疫情数据的控制类
 */
@Controller
@RequestMapping("/epidemic")
public class DataController {
    private final BaseProvinceDataService serviceP;
    private final BaseCityDataService serviceC;
    private final BaseGraphDataService serviceG;
    private final BaseTotalDataService serviceT;
    @Autowired
    public DataController(BaseProvinceDataService service, BaseCityDataService serviceC, BaseGraphDataService serviceG, BaseTotalDataService serviceT) {
        this.serviceP = service;
        this.serviceC = serviceC;
        this.serviceG = serviceG;
        this.serviceT = serviceT;
    }
    @GetMapping
    public String list(Model model){
        //省市份数据
        List<ProvinceData> provinceList = serviceP.list();
        model.addAttribute("provinceList", provinceList);
        //市区数据
        List<CityData> cityList = serviceC.list();
        model.addAttribute("cityList",cityList);
        //国内现在确诊人数折线图
        //List<GraphData> info = serviceG.list(new QueryWrapper<GraphData>().select("date", "now_confirm"));
        List<GraphData> info = serviceG.list();
        List<String> dateList = new ArrayList<>();
        List<Integer> nowConfirmList = new ArrayList<>();
        List<Integer> newImportCaseList = new ArrayList<>();
        List<Integer> grossImportCaseList = new ArrayList<>();
        List<Integer> newConfirmList = new ArrayList<>();
        List<Integer> newSuspectList = new ArrayList<>();
        List<Integer> grossConfirmList = new ArrayList<>();
        List<Integer> grossHealList = new ArrayList<>();
        List<Integer> grossDeadList = new ArrayList<>();
        List<String> deadRateList = new ArrayList<>();
        List<String> healRateList = new ArrayList<>();
        Map mapForm = new HashMap(16);
        for (int i =0; i< info.size();i++) {
            GraphData graphBean = info.get(i);
            dateList.add(graphBean.getDate());
            nowConfirmList.add(graphBean.getNowConfirm());
            newImportCaseList.add(graphBean.getNewImportCase());
            grossImportCaseList.add(graphBean.getGrossImportCase());
            newConfirmList.add(graphBean.getNewConfirm());
            newSuspectList.add(graphBean.getNewSuspect());
            grossConfirmList.add(graphBean.getGrossConfirm());
            grossHealList.add(graphBean.getGrossHeal());
            grossDeadList.add(graphBean.getGrossDead());
            deadRateList.add(graphBean.getDeadRate());
            healRateList.add(graphBean.getHealRate());
            if (i == info.size()-1){
                mapForm.put("gat",graphBean.getGat());
                mapForm.put("importCase",graphBean.getImportCase());
                mapForm.put("province",graphBean.getProvince());
            }
        }
        model.addAttribute("dateList",new Gson().toJson(dateList));
        //国内现有确诊趋势
        model.addAttribute("nowConfirmList",new Gson().toJson(nowConfirmList));
        //境外输入新增趋势折线图
        model.addAttribute("newImportCaseList",new Gson().toJson(newImportCaseList));
        //境外输入累计趋势折线图
        model.addAttribute("grossImportCaseList",new Gson().toJson(grossImportCaseList));
        //国内新增确诊趋势折线图
        model.addAttribute("newConfirmList",new Gson().toJson(newConfirmList));
        //国内新增疑似趋势折线图
        model.addAttribute("newSuspectList",new Gson().toJson(newSuspectList));
        //国内累计确诊趋势折线图
        model.addAttribute("grossConfirmList",new Gson().toJson(grossConfirmList));
        //国内累计治愈趋势折线图
        model.addAttribute("grossHealList",new Gson().toJson(grossHealList));
        //国内累计死亡趋势折线图
        model.addAttribute("grossDeadList",new Gson().toJson(grossDeadList));
        //死亡率
        model.addAttribute("deadRateList",new Gson().toJson(deadRateList));
        //治愈率
        model.addAttribute("healRateList",new Gson().toJson(healRateList));
        //全国现有确诊构成图 饼状图
        model.addAttribute("mapForm",new Gson().toJson(mapForm));
        //境外输入top10城市 柱状图
        List<ProvinceData> listTop10 = serviceP.selectImportProvinceList();
        model.addAttribute("listTop10",new Gson().toJson(listTop10));
        //获取每天总数统计
        TotalData total = serviceT.getOne(new QueryWrapper<>());
        System.out.println(total);
        model.addAttribute("total",total);
        return "epidemic";
    }
//    @GetMapping("/city/{id}")
//    public String listCity(Model model, @PathVariable String id){
//        List<CityData> cityList = serviceC.list();
//        model.addAttribute("cityList",cityList);
//        return "epidemic";
//    }
//    @GetMapping("/nowConfirm.do")
//    public String showGraph(Model model){
//        List<GraphData> info = serviceG.list(new QueryWrapper<GraphData>().select("date", "now_confirm"));
//        List<String> dateList = new ArrayList<>();
//        List<Integer> nowConfirmList = new ArrayList<>();
//        for (GraphData graphBean : info) {
//            dateList.add(graphBean.getDate());
//            nowConfirmList.add(graphBean.getNowConfirm());
//        }
//        model.addAttribute("dateList",new Gson().toJson(dateList));
//        model.addAttribute("nowConfirmList",new Gson().toJson(nowConfirmList));
//        return "epidemic";
//    }
//    @GetMapping("/TOP")
//    public String listTop10(Model model){
//        List<ProvinceData> listTop10 = serviceP.selectImportProvinceList();
//        model.addAttribute("listTop10",listTop10);
//        return "epidemic";
//    }
}
