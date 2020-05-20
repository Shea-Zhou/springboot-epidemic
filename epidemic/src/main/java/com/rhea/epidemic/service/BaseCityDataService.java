package com.rhea.epidemic.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.rhea.epidemic.domain.CityData;
import com.rhea.epidemic.domain.GraphData;

import java.util.List;

/**
 * @author Administrator Rhea
 * 疫情数据service接口
 */
public interface BaseCityDataService extends IService<CityData> {
    /**
     * 获取图表数据
     * @return 图表数据
     */
    List<GraphData> getInfo();

//    /**
//     * 获取响应信息
//     * @return 返回集合信息
//     */
//    void initialInfo(String id);
}
