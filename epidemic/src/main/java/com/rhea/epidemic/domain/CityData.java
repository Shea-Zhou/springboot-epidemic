package com.rhea.epidemic.domain;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author Administrator Rhea
 */
@Data@AllArgsConstructor@NoArgsConstructor@ToString
@TableName("cityData")
public class CityData {
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
    private int provinceId;
    @TableField(exist = false)
    private ProvinceData provinceData;
}
