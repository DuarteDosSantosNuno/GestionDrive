using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GestionDrivApi.Data;
using GestionDrivApi.Entities;
using Microsoft.EntityFrameworkCore;

namespace GestionDrivApi.Repositories
{
    public class UnitRepository 
    {

        private ApplicationContext _applicationContext;


        public UnitRepository(ApplicationContext applicationContext)
        {
            _applicationContext = applicationContext;
        }

        public async Task<List<Unit>> FindAll()
        {
            List<Unit> units = await _applicationContext.Units.ToListAsync();
            return units;
   

        }
        public Unit FindById(int id)
        {
                return _applicationContext.Units.Single(unit => unit.Id == id);       
        }

        public bool Exists(string unit)
        {
            return FindByUnit(unit) != null;
        }

        public Unit Create(Unit newUnit)
        {
            Unit unit = new Unit();
            unit.Unite = newUnit.Unite;
            unit.Prix = newUnit.Prix;
            _applicationContext.Units.Add(newUnit);
            _applicationContext.SaveChanges();
            return unit;
        }

        public bool Delete(int id)
        {
            Unit unitASupprimer = FindById(id);
            if (unitASupprimer != null)
            {
                _applicationContext.Units.Remove(unitASupprimer);
                _applicationContext.SaveChanges();
                return true;

            }
            else
            {
                return false;
            }
        }
        public bool Modify(Unit newUnit)
        {
            Unit unit = _applicationContext.Units.Single(u => u.Id == newUnit.Id);
            if (unit == null)
                return false;
            unit.Unite = newUnit.Unite;
            unit.Prix = newUnit.Prix;
            unit.Product.Nom = newUnit.Product.Nom;
            unit.Product.Description = newUnit.Product.Description;
            unit.Product.Category = newUnit.Product.Category;
            unit.Product.Quantity_stock = newUnit.Product.Quantity_stock;
            unit.Product.Category.Nom = newUnit.Product.Category.Nom;
            unit.Product.Category.Rayon.Nom = newUnit.Product.Category.Rayon.Nom;
            _applicationContext.SaveChanges();
            return true;
        }
        public List<Unit> FindByUnit(string unit)
        {
            List<Unit> units = _applicationContext.Units.ToList();
            foreach (Unit line in units)
            {
                if ( line.Unite == unit )
                    return _applicationContext.Units.Where(u => u.Unite.ToUpper().Contains(unit.ToUpper())).ToList();
            }
            return null;
            
            
        }
    }
}
