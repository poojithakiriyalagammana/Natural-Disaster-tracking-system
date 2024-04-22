package com.NaturalDisaster.fullstackbackend.controller;

import com.NaturalDisaster.fullstackbackend.exception.UserNotFoundException;
import com.NaturalDisaster.fullstackbackend.model.Disaster;
import com.NaturalDisaster.fullstackbackend.repository.DisasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DisasterController {

    @Autowired
    private DisasterRepository DisasterRepository;

    @PostMapping("/updateDisaster")
    Disaster newDisaster(@RequestBody Disaster newDisaster){
        return DisasterRepository.save(newDisaster);
    }

    @GetMapping("/disaster/{id}")
    public Disaster getDisasterById(@PathVariable Long id) {
        return DisasterRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @GetMapping("/allDisaster")
    public List<Disaster> getAllUsers() {
        return DisasterRepository.findAll();
    }


    @PutMapping("/disaster/{id}")
    public Disaster updateDisaster(@RequestBody Disaster newDisaster, @PathVariable Long id) {
        return DisasterRepository.findById(id)
                .map(Disaster -> {
                    Disaster.setDisasterType(newDisaster.getDisasterType());
                    Disaster.setLocation(newDisaster.getLocation());
                    Disaster.setDescription(newDisaster.getDescription());
                    return DisasterRepository.save(Disaster);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/disaster/{id}")
    public String deleteDisaster(@PathVariable Long id) {
        if (!DisasterRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        DisasterRepository.deleteById(id);
        return "Disaster has been deleted successfully.";
    }
}
