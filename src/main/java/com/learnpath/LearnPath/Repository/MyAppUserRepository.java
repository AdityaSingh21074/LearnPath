package com.learnpath.LearnPath.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.learnpath.LearnPath.Model.MyAppUser;

@Repository
public interface MyAppUserRepository extends JpaRepository<MyAppUser, Long>{
    
    Optional<MyAppUser> findByUsername(String username);
    
}
