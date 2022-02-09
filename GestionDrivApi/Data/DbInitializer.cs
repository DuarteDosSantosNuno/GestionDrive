using GestionDrivApi.Entities;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestionDrivApi.Data
{
    public static class DbInitializer 
    {     
        public async static Task Initialize(
            ApplicationContext context,
            RoleManager<IdentityRole> roleManager)
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

            if (!roleManager.Roles.Any())
            {
                IdentityRole user = new IdentityRole("User");
                IdentityRole admin = new IdentityRole("Admin");

                //await context.Cerfas.AddRangeAsync(mesCerfas);
                //await context.SaveChangesAsync();
                await roleManager.CreateAsync(user);
                await roleManager.CreateAsync(admin);
            }
        }
       
    }
}
