using GestionDrivApi.Data;
using GestionDrivApi.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GestionDrivApi.Entities;
using System.Linq;
using System;

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
		public Rayon Create(Rayon newRayon)
        {
            Rayon rayon = new Rayon();
            rayon.Nom = newRayon.Nom;
            _applicationContext.Rayons.Add(rayon);
            _applicationContext.SaveChanges();
            return rayon;
        }
        public bool Modify(Rayon newRayon)
        {
            Rayon rayon = new Rayon();
            rayon.Nom = newRayon.Nom;
            _applicationContext.Rayons.Add(rayon);
            _applicationContext.SaveChanges();
            return true;
        }
        public async Task<Rayon>  FindById(int id)
        {
            try
            {
                return _applicationContext.Rayons.Single(ra => ra.Id == id);
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public List<Rayon> FindByListNoms(string nom)
        {
            return _applicationContext.Rayons.Where(ra => ra.Nom.Trim().ToUpper().Contains(nom.Trim().ToUpper())).ToList();
        }
        public Rayon FindByNom(string nom)
        {
            try
            {
                return _applicationContext.Rayons.Single(ra => ra.Nom.ToUpper() == nom.ToUpper());
            }
            catch (Exception ex)
            {
                return null; 
            }
        }
        public bool ExistNom(string nom)
        {
            return (FindByNom(nom) != null);
        }
        public bool Update(Rayon newRayon)
        {
            Rayon rayon = _applicationContext.Rayons.Single(ra => ra.Id == newRayon.Id);
            if (rayon == null)
                return false;
            rayon.Nom = newRayon.Nom;
            _applicationContext.SaveChanges();
            return true;
		}
    }
}
