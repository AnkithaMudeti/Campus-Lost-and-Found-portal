package edu.infosys.lostAndFoundApplication.bean;

import java.time.LocalDateTime;
//this is chatMessageDto class

public class ChatMessageRequest {
    private String senderId;
    private String receiverId;
    private String content;
    private LocalDateTime timestamp;

    // Getters and setters
    public ChatMessageRequest() {}

    public String getSenderId() {
        return senderId;
    }

    public void setSenderId(String senderId) {
        this.senderId = senderId;
    }

    public String getReceiverId() {
        return receiverId;
    }

    public void setReceiverId(String receiverId) {
        this.receiverId = receiverId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}



