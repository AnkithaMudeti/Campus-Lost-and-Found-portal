package edu.infosys.lostAndFoundApplication.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import edu.infosys.lostAndFoundApplication.bean.LostFoundItem;

@Service
@Repository
public class LostFoundItemDaoImpl implements LostFoundItemDao {
    private LostFoundItemRepository repository;
    
    @Autowired
    public LostFoundItemDaoImpl(LostFoundItemRepository repository) {
        this.repository = repository;
    }

    @Override
    public void save(LostFoundItem item) {
        repository.save(item);
    }

    @Override
    public List<LostFoundItem> findAll() {
        return repository.findAll();
    }

    @Override
    public Long generateId() {
        Long id = repository.findMaxId();
        if(id == null) {
            id = 100001L;
        } else {
            id = id + 1;
        }
        return id;
    }

    @Override
    public List<LostFoundItem> lostItemList() {
        return repository.lostItemList();
    }

    @Override
    public List<LostFoundItem> foundItemList() {
        return repository.foundItemList();
    }

    @Override
    public LostFoundItem findById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<LostFoundItem> lostItemListByUser(String username) {
        return repository.lostItemListByUser(username);
    }

    @Override
    public List<LostFoundItem> foundItemListByUser(String username) {
        return repository.foundItemListByUser(username);
    }
}