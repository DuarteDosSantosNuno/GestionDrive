using GestionDrivApi.Data;
using GestionDrivApi.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestionDrivApi.Repositories
{
    public class CategoryRepository
    {
        private ApplicationContext _applicationContext;

        public CategoryRepository(ApplicationContext applicationContext)
        {
            _applicationContext = applicationContext;
        }

        public async Task<List<Category>> FindAll()
        {
            try
            {
                List<Category> categories = await _applicationContext.Categories
                                            .Include(c => c.Rayon)
                                            .OrderBy(c => c.Id)
                                            .ToListAsync();
                return categories;
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public async Task<Category> FindById(int id)
        {
            try
            {
                Category category = await _applicationContext.Categories
                                            .Include(c => c.Rayon)
                                            .Where(c => c.Id == id)
                                            .SingleAsync();
                return category;
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public async Task<Category> FindByName(string name)
        {
            try
            {
                Category category = await _applicationContext.Categories
                                            .Include(c => c.Rayon)
                                            .Where(c => c.Nom.ToLower() == name.ToLower())
                                            .SingleAsync();
                return category;
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public async Task<List<Category>> FindByRayonId(int rayonId)
        {
            try
            {
                List<Category> categories = await _applicationContext.Categories
                                            .Include(c => c.Rayon)
                                            .Where(c => c.Rayon.Id == rayonId)
                                            .OrderBy(c => c.Id)
                                            .ToListAsync();
                return categories;
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public async Task<bool> ExistById(int id)
        {
            bool exist = false;
            try
            {
                Category category = await _applicationContext.Categories
                                            .Include(c => c.Rayon)
                                            .Where(c => c.Id == id)
                                            .SingleAsync();
                return (category != null);
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public async Task<bool> ExistByName(string name)
        {
            try
            {
                Category category = await _applicationContext.Categories
                                            .Include(c => c.Rayon)
                                            .Where(c => c.Nom.ToLower() == name.ToLower())
                                            .SingleAsync();
                return (category != null);
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public async Task<Category> Create(Category newCategory)
        {
            try
            {
                newCategory.Rayon = new Rayon();
                await _applicationContext.Categories.AddAsync(newCategory);
                await _applicationContext.SaveChangesAsync();
                return newCategory;
            }
            catch (Exception e)
            {
                throw;
            }
        }
    }
}

