package com.pgad.service;

import java.util.List;

import com.pgad.dto.request.FeedbackRequest;
import com.pgad.dto.response.FeedbackResponse;

public interface FeedbackService {

    boolean saveFeedback(FeedbackRequest request);

    List<FeedbackResponse> getFeedbacks();

}