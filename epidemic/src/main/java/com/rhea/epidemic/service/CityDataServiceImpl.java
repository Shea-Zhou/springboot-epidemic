package com.rhea.epidemic.service;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.rhea.epidemic.domain.CityData;
import com.rhea.epidemic.domain.GraphData;
import com.rhea.epidemic.handler.GraphHandler;
import com.rhea.epidemic.mapper.CityDataMapper;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Administrator Rhea
 * service实现类
 */
@Service
public class CityDataServiceImpl extends ServiceImpl<CityDataMapper,CityData>implements BaseCityDataService {
//    private SaveAndUpdateData saveAndUpdateData =new SaveAndUpdateData();

    @Override
    public List<GraphData> getInfo() {
        return GraphHandler.getData();
    }
//    @Override
//    public void initialInfo(String id) {
//        saveAndUpdateData.saveData(id);
//    }
}
