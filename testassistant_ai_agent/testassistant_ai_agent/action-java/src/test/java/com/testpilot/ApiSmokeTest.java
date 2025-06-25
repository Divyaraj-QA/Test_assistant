package com.testpilot;

import io.restassured.RestAssured;
import org.junit.jupiter.api.Test;

import static org.hamcrest.Matchers.equalTo;

public class ApiSmokeTest {

    @Test
    void example() {
        RestAssured.
            given().
            when().
                get("https://jsonplaceholder.typicode.com/todos/1").
            then().
                statusCode(200).
                body("id", equalTo(1));
    }
}
