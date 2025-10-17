package edu.infosys.lostAndFoundApplication.controller;



import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.web.bind.annotation.*;

import edu.infosys.lostAndFoundApplication.bean.ChatMessage;
import edu.infosys.lostAndFoundApplication.bean.ChatMessageRequest;
import edu.infosys.lostAndFoundApplication.service.ChatService;

import java.util.List;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "http://localhost:3939", allowCredentials = "true")
public class ChatController {

    private final ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    // For WebSocket - sending messages
    @MessageMapping("/sendMessage")
    @SendTo("/topic/messages")
    public ChatMessage sendMessage(@Payload ChatMessageRequest messageRequest) {
        // ensure timestamp
        if (messageRequest.getTimestamp() == null) {
            messageRequest.setTimestamp(java.time.LocalDateTime.now());
        }
        return chatService.saveMessage(messageRequest);
    }

    // For REST - fetching previous messages between two users
    @GetMapping("/history/{user1}/{user2}")
    public List<ChatMessage> getChatHistory(@PathVariable("user1") String user1, @PathVariable("user2") String user2) {
        return chatService.getChatHistory(user1, user2);
    }
}


