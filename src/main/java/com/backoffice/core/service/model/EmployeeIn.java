package com.backoffice.core.service.model;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * Created by Geoffrey on 02.07.2018
 */
public class EmployeeIn {

    /**
     */
    private Boolean anonymous;

    /**
     */
    @Email(message = "EMAIL_INVALID")
    @NotNull(message = "EMAIL_NULL")
    @Size(min = 1, max = 255, message = "EMAIL_LENGTH_INVALID")
    private String email;

    /**
     */
    @NotNull(message = "PASSWORD_NULL")
    @Size(min = 1, max = 255, message = "PASSWORD_LENGTH_INVALID")
    private String password;

    /**
     */
    public EmployeeIn() {
        super();
    }

    /**
     */
    @Override
    public String toString() {
        return "EmployeeIn{" +
                "anonymous=" + anonymous +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    /**
     */
    public Boolean getAnonymous() {
        return anonymous;
    }

    /**
     */
    public void setAnonymous(final Boolean anonymous) {
        this.anonymous = anonymous;
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
