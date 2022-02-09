using System;
using System.Collections.Generic;
using System.IO;
using static System.Diagnostics.Process;
using System.Globalization;
using GestionDrivApi.Entities;



namespace GestionDrivApi.Repositories.Interfaces
{
    public interface IUnitRepository
    {
        public List<Unit> FindAll();
        public Unit FindById(int id);

        public bool Exists(int id);

        public Unit Create(Unit newUnit);

        public bool Delete(int id);

        public bool Modify(Unit newUnit);

    }
}
