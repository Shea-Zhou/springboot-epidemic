package com.rhea.epidemic.handler;

import com.rhea.epidemic.domain.CityData;
import com.rhea.epidemic.domain.GraphData;
import com.rhea.epidemic.domain.ProvinceData;
import com.rhea.epidemic.service.BaseCityDataService;
import com.rhea.epidemic.service.BaseGraphDataService;
import com.rhea.epidemic.service.BaseProvinceDataService;
import com.rhea.epidemic.service.BaseTotalDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.List;

/**
 * @author Administrator Rhea
 * 保存和定时更新数据库
 */
@Component
public class SaveAndUpdateData {
    private String flag = "1";

    private final BaseProvinceDataService serviceP;
    private final BaseCityDataService serviceC;
    private final BaseGraphDataService serviceG;
    private final BaseTotalDataService serviceT;
    @Autowired
    public SaveAndUpdateData(BaseProvinceDataService serviceP, BaseCityDataService serviceC, BaseGraphDataService serviceG, BaseTotalDataService serviceT) {
        this.serviceP = serviceP;
        this.serviceC = serviceC;
        this.serviceG = serviceG;
        this.serviceT = serviceT;
    }

    @PostConstruct
    public void saveData() {
        List<GraphData> graphDataList = GraphHandler.getData();
        List<ProvinceData> provinceDataList = JsonHandler.getData();
        //将原来数据库中的数据清空
        serviceG.remove(null);
        serviceG.saveBatch(graphDataList);
        serviceP.remove(null);
        serviceP.saveBatch(provinceDataList);
        serviceC.remove(null);
        for (ProvinceData provinceData:provinceDataList){
            List<CityData> cityDataList = provinceData.getCityDataList();
            serviceC.saveBatch(cityDataList);
        }
        serviceT.remove(null);
        serviceT.save(JsonHandler.getTotalData());
    }
//    public void saveData(String id){
//        List<DataBean> dataBeanList = null;
//        flag = id;
//        if (flag.equals(id)) {
//            dataBeanList = DataHandler.getData();
//        }else {
//            dataBeanList = JsoupHandler.getData();
//        }
//        //将原来数据库中的数据清空
//        service.remove(null);
//        service.saveBatch(dataBeanList);
//    }

    /**
     * 定时更新数据
     * 一分钟更新一次
     */
//    @Scheduled(cron = "0 0/1 * * * ?")
//    public void updateData() {
//        saveData();
//        //saveData(flag);
////        System.out.println("更新数据");
//    }
}
