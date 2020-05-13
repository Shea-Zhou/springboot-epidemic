package com.rhea.epidemic.controller;

import com.rhea.epidemic.domain.DataBean;
import com.rhea.epidemic.service.BaseDataService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * @author Administrator Rhea
 * 处理疫情数据的控制类
 */
@Controller
@RequestMapping("/epidemic")
public class DataController {
    private final BaseDataService service;

    public DataController(BaseDataService service) {
        this.service = service;
    }

    @GetMapping
    public String list(Model model){
        List<DataBean> dataList = service.getInfo();
        model.addAttribute("dataList",dataList);
        return "list";
    }
}
