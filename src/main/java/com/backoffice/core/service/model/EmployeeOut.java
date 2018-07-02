package com.backoffice.core.service.model;

/**
 * Created by Geoffrey on 02.07.2018
 */
public class EmployeeOut {

    /**
     */
    private String email;

    /**
     */
    private String password;

    /**
     */
    public EmployeeOut() {
        super();
    }

    /**
     */
    @Override
    public String toString() {
        return "EmployeeOut{" +
                "email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    /**
     */
    public String getEmail() {
        return email;
    }

    /**
     */
    public void setEmail(final String email) {
        this.email = email;
    }

    /**
     */
    public String getPassword() {
        return password;
    }

    /**
     */
    public void setPassword(final String password) {
        this.password = password;
    }
}
