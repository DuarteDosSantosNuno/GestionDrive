

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
            //context.Database.EnsureDeleted();
            context.Database.EnsureCreated();

            Rayon r1, r2, r3;
            r1 = r2 = r3 = null;
            if (!context.Rayons.Any())
            {
                r1 = new Rayon { Nom = "Laiteries" };
                r2 = new Rayon { Nom = "Viandes" };
                r3 = new Rayon { Nom = "Legumes" };
                IEnumerable<Rayon> rayons = new List<Rayon>()
                {
                    r1, r2, r3
                };
                await context.AddRangeAsync(rayons);
            }
        }
       
    }
}
