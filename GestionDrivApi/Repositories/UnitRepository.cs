using System;
using System.Collections.Generic;
using System.Linq;
using GestionDrivApi.Data;
using GestionDrivApi.Entities;
using GestionDrivApi.Repositories.Interfaces;


namespace GestionDrivApi.Repositories
{
    public class UnitRepository : IUnitRepository
    {

        private ApplicationContext _applicationContext;

        public UnitRepository(ApplicationContext applicationContext)
        {
            _applicationContext = applicationContext;
        }

        public List<Unit> FindAll()
        {
            return _applicationContext.Units.ToList();
        }
        public Unit FindById(int id)
        {
            try
            {
                return _applicationContext.Units.Single(unit => unit.Id == id);
            }
            catch (Exception ex)
            {
                return null;
            }

        }

        public bool Exists(int id)
        {
            return FindById(id) != null;
        }

        public Unit Create(Unit newUnit)
        {
            _applicationContext.Units.Add(newUnit);
            _applicationContext.SaveChanges();
            return newUnit;
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
            Unit unitAModifier = FindById(newUnit.Id);
            if (unitAModifier != null)
            {
                unitAModifier.Unite = newUnit.Unite;
                unitAModifier.Prix = newUnit.Prix;
                unitAModifier.Product = newUnit.Product;

                _applicationContext.SaveChanges();
                return true;

            }
            else
            {
                return false;
            }
        }
    }
}
