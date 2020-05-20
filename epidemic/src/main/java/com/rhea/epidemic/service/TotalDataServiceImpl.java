package com.rhea.epidemic.service;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.rhea.epidemic.domain.CityData;
import com.rhea.epidemic.domain.GraphData;
import com.rhea.epidemic.domain.TotalData;
import com.rhea.epidemic.handler.DataHandler;
import com.rhea.epidemic.handler.GraphHandler;
import com.rhea.epidemic.handler.JsonHandler;
import com.rhea.epidemic.mapper.CityDataMapper;
import com.rhea.epidemic.mapper.TotalDataMapper;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Administrator Rhea
 * service实现类
 */
@Service
public class TotalDataServiceImpl extends ServiceImpl<TotalDataMapper, TotalData>implements BaseTotalDataService {

}
