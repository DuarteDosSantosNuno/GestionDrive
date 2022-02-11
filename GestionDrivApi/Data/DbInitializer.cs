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
            //context.Database.EnsureDeleted();
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

            Category c1, c2, c3, c4, c5, c6;
            c1 = c2 = c3 = c4 = c5 = c6 = null;
            if (!context.Categories.Any())
            {
                c1 = new Category { Nom = "Lait", Rayon = r1 };
                c2 = new Category { Nom = "Yaourt", Rayon = r1 };
                c3 = new Category { Nom = "Beurre", Rayon = r1 };
                c4 = new Category { Nom = "Pommes", Rayon = r4 };
                c5 = new Category { Nom = "Choux", Rayon = r3 };
                c6 = new Category { Nom = "Entrecôte", Rayon = r2 };
                IEnumerable<Category> categories = new List<Category>()
                {
                    c1, c2, c3, c4,c5, c6
                };
                await context.AddRangeAsync(categories);
                await context.SaveChangesAsync();
            }
            Product p1, p2, p3, p4, p5, p6;
            p1 = p2 = p3 = p4 = p5 = p6 = null;
            if (!context.Products.Any())
            {
                p1 = new Product { Nom = "Lactel", Description = "Lait Demi écrémé bio stérilisé UHT", Quantity_stock = 100, Category = c1, Disponible = true };
                p2 = new Product { Nom = "Activia", Description = "Yaourt aux fruits bifidus 0%MG", Quantity_stock = 250, Category = c2, Disponible = true };
                p3 = new Product { Nom = "Ghana", Description = "Banane Fairtrade filière responsable", Quantity_stock = 75, Category = c4, Disponible = true };
                p4 = new Product { Nom = "Charal", Description = "Entrecôte boeuf par 1", Quantity_stock = 80, Category = c6, Disponible = true };
                p5 = new Product { Nom = "Boucherie", Description = "Entrecôte à la coupe", Quantity_stock = 110, Category = c6, Disponible = true };
                p6 = new Product { Nom = "Chou-Fleur", Description = "Chou-fleur provenance France à la pièce", Quantity_stock = 150, Category = c5, Disponible = true };

                IEnumerable<Product> products = new List<Product>()
                {
                    p1, p2, p3, p4, p5, p6
                };
                await context.AddRangeAsync(products);
                await context.SaveChangesAsync();
            }
            Unit u1, u2, u3, u4, u5, u6;
            u1 = u2 = u3 = u4 = u5 = u6 = null;
            if (!context.Units.Any())
            {
                u1 = new Unit { Unite = "unité", Prix = 1.18, Product = p1 };
                u2 = new Unit { Unite = "kg", Prix = 2.47, Product = p2 };
                u3 = new Unit { Unite = "kg", Prix = 2.25, Product = p3 };
                u4 = new Unit { Unite = "kg", Prix = 26.82, Product = p4 };
                u5 = new Unit { Unite = "kg", Prix = 20.92, Product = p5 };
                u6 = new Unit { Unite = "unité", Prix = 1.99, Product = p6 };

                IEnumerable<Unit> units = new List<Unit>()
                {
                    u1, u2, u3, u4, u5, u6
                };
                await context.AddRangeAsync(units);
                await context.SaveChangesAsync();
            }
            if (!roleManager.Roles.Any())
            {
                IdentityRole user = new IdentityRole("Client");
                IdentityRole employee = new IdentityRole("Employee");
                IdentityRole admin = new IdentityRole("Admin");

                //await context.Cerfas.AddRangeAsync(mesCerfas);
                //await context.SaveChangesAsync();
                await roleManager.CreateAsync(user);
                await roleManager.CreateAsync(admin);
                await roleManager.CreateAsync(employee);
            }
        }

    }
}