package edu.infosys.lostAndFoundApplication.bean;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "chat_messages", indexes = {
    @Index(columnList = "senderId"),
    @Index(columnList = "receiverId"),
    @Index(columnList = "timestamp")
})
public class ChatMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String senderId;
    private String receiverId;

    @Column(columnDefinition = "TEXT")
    private String content;

    private LocalDateTime timestamp;

    private boolean isRead = false;

    public ChatMessage() {}

    public ChatMessage(String senderId, String receiverId, String content) {
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.content = content;
        this.timestamp = LocalDateTime.now();
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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

	public boolean isRead() {
		return isRead;
	}

	public void setRead(boolean isRead) {
		this.isRead = isRead;
	}

	@Override
	public String toString() {
		return "ChatMessage [id=" + id + ", senderId=" + senderId + ", receiverId=" + receiverId + ", content="
				+ content + ", timestamp=" + timestamp + ", isRead=" + isRead + "]";
	}

    
}


