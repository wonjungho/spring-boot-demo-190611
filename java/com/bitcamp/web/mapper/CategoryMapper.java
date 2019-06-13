package com.bitcamp.web.mapper;

import java.util.List;

import com.bitcamp.web.domain.CategoryDTO;

import org.springframework.stereotype.Repository;

/**
 * CategoryMapper
 */
@Repository
public interface CategoryMapper {
    
    public void insertCategory(CategoryDTO category);

    public List<CategoryDTO> selectCategories();

    public List<CategoryDTO> selectCategoriesByOption(CategoryDTO option);

    public CategoryDTO selectCategoryBycategoryId(String categoryId);

    public void updateCategory(CategoryDTO category);

    public void deleteCategory(CategoryDTO category);

    
}