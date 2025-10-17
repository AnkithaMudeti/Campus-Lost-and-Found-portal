package edu.infosys.lostAndFoundApplication.service;


import org.springframework.stereotype.Service;

import edu.infosys.lostAndFoundApplication.bean.ChatMessage;
import edu.infosys.lostAndFoundApplication.bean.ChatMessageRequest;
import edu.infosys.lostAndFoundApplication.dao.ChatMessageRepository;

import java.util.List;

@Service
public class ChatService {

    private final ChatMessageRepository repository;

    public ChatService(ChatMessageRepository repository) {
        this.repository = repository;
    }

    public ChatMessage saveMessage(ChatMessage msg) {
        return repository.save(msg);
    }

    // Overload to accept DTO from websocket/rest
    public ChatMessage saveMessage(ChatMessageRequest request) {
        ChatMessage entity = new ChatMessage();
        entity.setSenderId(request.getSenderId());
        entity.setReceiverId(request.getReceiverId());
        entity.setContent(request.getContent());
        entity.setTimestamp(request.getTimestamp() != null ? request.getTimestamp() : java.time.LocalDateTime.now());
        return repository.save(entity);
    }

    // fetch two-way conversation
    public List<ChatMessage> getConversation(String userId1, String userId2) {
        return repository.findBySenderIdAndReceiverIdOrSenderIdAndReceiverIdOrderByTimestampAsc(
            userId1, userId2, userId2, userId1
        );
    }

    // Alias used by controller
    public List<ChatMessage> getChatHistory(String userId1, String userId2) {
        return getConversation(userId1, userId2);
    }
}
