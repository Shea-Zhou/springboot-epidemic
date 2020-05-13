package com.rhea.epidemic.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Administrator Rhea
 */
@Data@AllArgsConstructor@NoArgsConstructor
public class DataBean {
    private String area;
    private int nowConfirm;
    private int confirm;
    private int heal;
    private int dead;
}
