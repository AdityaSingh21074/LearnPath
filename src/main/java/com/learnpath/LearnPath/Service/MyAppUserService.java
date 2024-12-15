package com.learnpath.LearnPath.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
// import org.springframework.transaction.annotation.Transactional;

import com.learnpath.LearnPath.Model.MyAppUser;
import com.learnpath.LearnPath.Repository.MyAppUserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor 
public class MyAppUserService implements UserDetailsService {

    @Autowired
    private MyAppUserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<MyAppUser> user = repository.findByUsername(username);
        if (user.isPresent()) {
            var userObj = user.get();
            return User.builder()
                    .username(userObj.getUsername())
                    .password(userObj.getPassword())
                    .build();    
        } else {
            throw new UsernameNotFoundException(username);
        }
    }

    // Method to increment coins when the user logs in
    // @Transactional
    // public void incrementCoins(String username) {
    //     Optional<MyAppUser> userOptional = repository.findByUsername(username);
    //     if (userOptional.isPresent()) {
    //         MyAppUser user = userOptional.get();
    //         user.setCoins(user.getCoins() + 1);   
    //         repository.save(user);  
    //     }
    // }
}
