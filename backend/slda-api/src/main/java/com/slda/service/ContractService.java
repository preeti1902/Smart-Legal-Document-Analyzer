package com.slda.service;

import com.slda.model.Contract;
import com.slda.repository.ContractRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ContractService {

    private final ContractRepository contractRepo;

    public Contract saveContract(MultipartFile file, String uploadedBy) throws IOException {
        Contract contract = new Contract();
        contract.setFilename(file.getOriginalFilename());
        contract.setFileContent(file.getBytes());
        contract.setUploadedAt(LocalDateTime.now());
        contract.setUploadBy(uploadedBy);
        contract.setStatus("Pending");
        return contractRepo.save(contract);
    }

    public List<Contract> getAllContracts() {
        return contractRepo.findAll();
    }

    public Contract getContractById(Long id) {
        return contractRepo.findById(id).orElseThrow(() -> new RuntimeException("Contract not found"));
    }
    
}
