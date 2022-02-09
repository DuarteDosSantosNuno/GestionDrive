

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

            Category c1, c2, c3, c4;
            c1 = c2 = c3 = c4 = null;
            if (!context.Categories.Any())
            {
                c1 = new Category { Nom = "Lait", Rayon = r1 };
                c2 = new Category { Nom = "Yaourt", Rayon = r1 };
                c3 = new Category { Nom = "Beurre", Rayon = r1 };
                c4 = new Category { Nom = "Pommes", Rayon = r4 };
                IEnumerable<Category> categories = new List<Category>()
                {
                    c1, c2, c3, c4
                };
                await context.AddRangeAsync(categories);
                await context.SaveChangesAsync();
            }
        }

    }
}
