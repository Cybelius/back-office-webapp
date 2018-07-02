package com.backoffice.core.service;

import com.backoffice.core.service.model.EmployeeIn;
import com.backoffice.core.service.model.EmployeeOut;

/**
 * Created by Geoffrey on 02.07.2018
 */
public interface LoginService {

    /**
     * @param employee the employee to check
     * @return a {@link EmployeeOut}
     */
    EmployeeOut login(final EmployeeIn employee);
}
