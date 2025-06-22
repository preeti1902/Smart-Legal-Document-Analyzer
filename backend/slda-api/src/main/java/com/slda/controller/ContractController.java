package com.slda.controller;

import com.slda.model.Contract;
import com.slda.service.ContractService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/contracts")
@RequiredArgsConstructor
public class ContractController {

    private final ContractService contractService;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadContract(@RequestParam("file") MultipartFile file,
                                            Authentication authentication) {
        try {
            String username = authentication.getName();
            Contract saved = contractService.saveContract(file, username);
            return ResponseEntity.ok(saved);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Upload failed");
        }
    }

    @GetMapping
    public ResponseEntity<List<Contract>> getAllContracts() {
        return ResponseEntity.ok(contractService.getAllContracts());
    }

    @GetMapping("/download/{id}")
public ResponseEntity<byte[]> downloadContract(@PathVariable Long id) {
    Contract contract = contractService.getContractById(id);

    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_PDF);
    headers.setContentDisposition(ContentDisposition.builder("attachment")
            .filename(contract.getFilename())
            .build());

    return new ResponseEntity<>(contract.getFileContent(), headers, HttpStatus.OK);
}
}
