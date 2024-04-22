package com.NaturalDisaster.fullstackbackend.repository;

import com.NaturalDisaster.fullstackbackend.model.Disaster;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DisasterRepository extends JpaRepository<Disaster,Long> {
}
