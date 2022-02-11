

using GestionDrivApi.Entities;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestionDrivApi.Data
{
    public static class DbInitializer 
    {     
        public async static Task Initialize(ApplicationContext context)
        {
            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();

            Rayon r1, r2, r3, r4;
            r1 = r2 = r3 = r4 = null;
            if (!context.Rayons.Any())
            {
                r1 = new Rayon { Nom = "Laiteries" };
                r2 = new Rayon { Nom = "Viandes" };
                r3 = new Rayon { Nom = "Legumes" };
                r4 = new Rayon { Nom = "Fruits" };
                IEnumerable<Rayon> rayons = new List<Rayon>()
                {
                    r1, r2, r3, r4
                };
                await context.AddRangeAsync(rayons);
                await context.SaveChangesAsync();
            }
            Unit u1, u2, u3, u4, u5, u6;
            u1 = u2 = u3 = u4 = u5 = u6 = null;
            if (!context.Units.Any())
            {
                u1 = new Unit { Unite = "kg", Prix = 12  };
                u2 = new Unit { Unite = "kg", Prix = 13  };
                u3 = new Unit { Unite = "kg", Prix = 14,  };
                u4 = new Unit { Unite = "kg",  Prix = 15, };
                u5 = new Unit { Unite = "kg", Prix = 15, };
                u6 = new Unit { Unite = "unité", Prix = 1.99, };

                IEnumerable<Unit> units = new List<Unit>()
                {
                    u1, u2, u3, u4, u5, u6
                };
                await context.AddRangeAsync(units);
                await context.SaveChangesAsync();
            }

        }
       
    }
}
