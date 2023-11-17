package com.pgad.repostory;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pgad.model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

    Optional<Feedback> findByUsernameAndUseremail(String uname, String uemail);

}