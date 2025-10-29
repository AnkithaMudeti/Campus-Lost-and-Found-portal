package edu.infosys.broadcastdemo;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "chat_messages")
public class ChatMessage {

    private String type;   // "QUESTION" or "ANSWER"
    private String sender;
    private String content;

    // Default constructor (required by JPA)
    public ChatMessage() {
    }

    // Parameterized constructor
    public ChatMessage(String type, String sender, String content) {
        this.type = type;
        this.sender = sender;
        this.content = content;
    }

    // Getters and Setters
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    // Optional: toString() method
    @Override
    public String toString() {
        return "ChatMessage{" +
                "type='" + type + '\'' +
                ", sender='" + sender + '\'' +
                ", content='" + content + '\'' +
                '}';
    }
}

