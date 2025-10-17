package edu.infosys.lostAndFoundApplication.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.infosys.lostAndFoundApplication.bean.ChatMessage;

import java.util.List;

public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {

    // Get conversation between two users, ordered by time (ascending)
    List<ChatMessage> findBySenderIdAndReceiverIdOrderByTimestampAsc(String senderId, String receiverId);

    // For full two-way conversation (both directions), you might use a custom query:
    List<ChatMessage> findBySenderIdAndReceiverIdOrSenderIdAndReceiverIdOrderByTimestampAsc(
        String s1, String r1, String s2, String r2);
}


