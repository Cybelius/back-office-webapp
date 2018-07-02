package com.backoffice.core.service.support;

import com.backoffice.core.service.LoginService;
import com.backoffice.core.service.model.EmployeeIn;
import com.backoffice.core.service.model.EmployeeOut;
import com.backoffice.core.utils.DomainUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * Created by Geoffrey on 02.07.2018
 */
@Service
public class LoginServiceImpl implements LoginService {

    /**
     */
    private static final Logger log = LoggerFactory.getLogger(LoginServiceImpl.class);

    /**
     */
    public LoginServiceImpl() {
        super();
    }

    /**
     * @see com.backoffice.core.service.LoginService#login(EmployeeIn)
     */
    @Override
    public EmployeeOut login(final EmployeeIn employee) {
        log.debug("employee: {}", employee);

        final EmployeeOut employeeOut = new EmployeeOut();
        employeeOut.setEmail(employee.getEmail());
        employeeOut.setPassword(DomainUtils.digestPassword(employee.getPassword()));

        return employeeOut;
    }
}
