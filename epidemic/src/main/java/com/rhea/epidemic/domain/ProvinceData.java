package com.rhea.epidemic.domain;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.*;

import java.util.List;

/**
 * @author Administrator Rhea
 */
@Getter@Setter@AllArgsConstructor@NoArgsConstructor
@TableName("provinceData")
public class ProvinceData {

    private int id;
    private String name;
    private int nowConfirm;
    private int confirm;
    private int heal;
    private int dead;
    private int suspect;
    private int newConfirm;
    private int confirmCuts;
    private String deadRate;
    private String healRate;
    private boolean isUpdate;
    private String tip;
    private int compareDay;
    private int compareNum;
    @TableField(exist = false)
    private List<CityData> cityDataList;


}
