package com.backoffice.core.utils;


import org.apache.commons.codec.digest.DigestUtils;

/**
 * Created by Geoffrey on 02.07.2018
 */
public class DomainUtils {

    /**
     * @param password the password to encrypt
     * @return SHA-256 digest as a hex string
     */
    public static String digestPassword(final String password) {
        return DigestUtils.sha256Hex(password);
    }

}
