using GestionDrivApi.Entities;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestionDrivApi.Data
{
    public static class DbInitializer 
    {     
        public async static Task Initialize(ApplicationContext context, RoleManager<IdentityRole> roleManager)
        {
            //context.Database.EnsureDeleted();
            context.Database.EnsureCreated();

            Rayon r1, r2, r3;
            r1 = r2 = r3 = null;
            if (!context.Rayons.Any())
            {
                r1 = new Rayon { Nom = "Laitiers" };
                r2 = new Rayon { Nom = "Viandes" };
                r3 = new Rayon { Nom = "Legumes & Fruits" };
                IEnumerable<Rayon> rayons = new List<Rayon>()
                {
                r1, r2, r3
                };
                await context.AddRangeAsync(rayons);

            }


            Category c1, c2, c3, c4, c5, c6, c7;
            c1 = c2 = c3 = c4 = c5 = c6 = c7 = null;
            if (!context.Categories.Any())
            {
                c1 = new Category { Nom = "Cremes", Rayon = r1 };
                c2 = new Category { Nom = "Yaourts", Rayon = r1 };
                c3 = new Category { Nom = "Lait", Rayon = r1 };
                c4 = new Category { Nom = "Legume", Rayon = r3 };
                c5 = new Category { Nom = "Fruites", Rayon = r3 };
                c6 = new Category { Nom = "Volailles", Rayon = r2 };
                c7 = new Category { Nom = "Boucherie", Rayon = r2 };
                IEnumerable<Category> categories = new List<Category>()
                {
                c1, c2, c3, c4, c5, c6, c7

                };
                await context.AddRangeAsync(categories);
            }


            Product pd1, pd2, pd3, pd4, pd5, pd6, pd7;
            pd1 = pd2 = pd3 = pd4 = pd5 = pd6 = pd7 = null;
            if (!context.Products.Any())
            {
                pd1 = new Product
                {
                    Nom = "LACTEL : Lait demi-écrémé UHT",
                    Description = "APRÈS OUVERTURE, À CONSERVER AU FROID (6°C MAX) ET À CONSOMMER RAPIDEMENT (SOUS 3 JOURS)",
                    QuantityStock = 100,
                    CategoryId = c3.Id,
                    Disponible = true,
                };
                pd2 = new Product
                {
                    Nom = "ELLE&VIRE : Crème fraîche épaisse entière 30% M.G",
                    Description = "A CONSERVER AU RÉFRIGÉRATEUR À + 6°C MAXIMUM.APRÈS OUVERTURE SE CONSERVE 15 JOURS DANS DES CONDITIONS NORMALES DE STOCKAGE.",
                    QuantityStock = 100,
                    CategoryId = c3.Id,
                    Disponible = true,
                };
                pd3 = new Product
                {
                    Nom = "YAOS : Yaourts à la grecque nature",
                    Description = "A CONSERVER AU FRAIS À MAX. +6°C",
                    QuantityStock = 100,
                    CategoryId = c3.Id,
                    Disponible = true,
                };
                pd4 = new Product
                {
                    Nom = "POMME : Pink Lady",
                    Description = "Pommes Pinkids, ARFUMÉE, CROQUANTE ET SUCRÉE, variété Crisp Pink, calibre 115-150g.",
                    QuantityStock = 100,
                    CategoryId = c5.Id,
                    Disponible = true,
                };
                pd5 = new Product
                {
                    Nom = "POMME DE TERRE : Pommes de terre de consommation",
                    Description = "Pommes de terre de consommation traité contre la germination, variété Sunita, Challenger / Excellency, catégorie 1, calibre 40-70 mm.",
                    QuantityStock = 100,
                    CategoryId = c4.Id,
                    Disponible = true,
                };
                pd6 = new Product
                {
                    Nom = "LE GAULOIS : 4 à 5 filets de poulet blanc",
                    Description = "Le Gaulois vous propose des Filets de poulet, prêts en quelques minutes, pour des recettes variées au quotidien.Les poulets Le Gaulois sont garantis 100% français : nés, élevés et préparés en France.",
                    QuantityStock = 100,
                    CategoryId = c6.Id,
                    Disponible = true,
                };
                pd7 = new Product
                {
                    Nom = "CHARAL : Onglet moelleux",
                    Description = "A CONSERVER ENTRE 0°C ET + 4°C ET À CONSOMMER DANS LES 24 HEURES MAXIMUM APRÈS OUVERTURE.",
                    QuantityStock = 100,
                    CategoryId = c7.Id,
                    Disponible = true,
                };
                IEnumerable<Product> products = new List<Product>()
                {
                pd1, pd2, pd3, pd4, pd5, pd6, pd7
                };
                await context.AddRangeAsync(products);
            }


            Unit u1, u2, u3, u4, u5, u6, u7;
            u1 = u2 = u3 = u4 = u5 = u6 = u7 = null;
            if (!context.Units.Any())
            {
                u1 = new Unit { Unite = "unité", Prix = 1.5, Product = pd2 };
                u2 = new Unit { Unite = "pack", Prix = 1.79, Product = pd3 };
                u3 = new Unit { Unite = "lot", Prix = 5.09, Product = pd1 };
                u4 = new Unit { Unite = "unité", Prix = 3.19, Product = pd5 };
                u5 = new Unit { Unite = "lot", Prix = 2.29, Product = pd4 };
                u6 = new Unit { Unite = "unité", Prix = 7.05, Product = pd6 };
                u7 = new Unit { Unite = "unité", Prix = 4.55, Product = pd7 };
                IEnumerable<Unit> units = new List<Unit>()
                {
                u1, u2, u3, u4, u5, u6, u7
                };
                await context.AddRangeAsync(units);
                await context.SaveChangesAsync();

		    }

               
            if (!roleManager.Roles.Any())
            {
                IdentityRole admin = new IdentityRole("Admin");
                IdentityRole employee = new IdentityRole("Employee");
                IdentityRole user = new IdentityRole("Client");

                await roleManager.CreateAsync(admin);
                await roleManager.CreateAsync(employee);
                await roleManager.CreateAsync(user);
            }

        }

    }
}