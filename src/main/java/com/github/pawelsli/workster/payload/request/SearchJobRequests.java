package com.github.pawelsli.workster.payload.request;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import java.util.List;

@Data
public class SearchJobRequests {

    private List<String> userNames;

    @NotEmpty
    private List<String> keyWords;

}
