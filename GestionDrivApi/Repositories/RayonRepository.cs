using GestionDrivApi.Data;
using GestionDrivApi.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GestionDrivApi.Repositories
{
    public class RayonRepository
    {
        private ApplicationContext _applicationContext;
        
        public RayonRepository(ApplicationContext applicationContext)
        {
            _applicationContext = applicationContext;
        }

        public async Task<List<Rayon>> FindAll()
        {
            List<Rayon> rayons = await _applicationContext.Rayons.ToListAsync();
            return rayons;
        }

        internal Task<Rayon> FindById(int id)
        {
            throw new NotImplementedException();
        }
    }
}
