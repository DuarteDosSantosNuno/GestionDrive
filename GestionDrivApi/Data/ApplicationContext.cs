﻿using GestionDrivApi.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GestionDrivApi.Data
{
    public class ApplicationContext : IdentityDbContext<Personne>
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Rayon> Rayons { get; set; }
        public DbSet<Unit> Units { get; set; }
        public DbSet<Commande> Commandes { get; set; }
        public DbSet<ProductImage> ProductImages { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.HasSequence<int>("Product_id_seq").StartsAt(1).IncrementsBy(1);
            modelBuilder.HasSequence<int>("Category_id_seq").StartsAt(1).IncrementsBy(1);
            modelBuilder.HasSequence<int>("Rayon_id_seq").StartsAt(1).IncrementsBy(1);
            modelBuilder.HasSequence<int>("Unit_id_seq").StartsAt(1).IncrementsBy(1);
            modelBuilder.HasSequence<int>("Commande_id_seq").StartsAt(1).IncrementsBy(1);
            modelBuilder.HasSequence<int>("ProductImage_id_seq").StartsAt(1).IncrementsBy(1);

            modelBuilder.Entity<Product>().Property(p => p.Id).HasDefaultValueSql("NEXT VALUE FOR Product_id_seq");
            modelBuilder.Entity<Category>().Property(c => c.Id).HasDefaultValueSql("NEXT VALUE FOR Category_id_seq");
            modelBuilder.Entity<Rayon>().Property(r => r.Id).HasDefaultValueSql("NEXT VALUE FOR Rayon_id_seq");
            modelBuilder.Entity<Unit>().Property(u => u.Id).HasDefaultValueSql("NEXT VALUE FOR Unit_id_seq");
            modelBuilder.Entity<Commande>().Property(c => c.Id).HasDefaultValueSql("NEXT VALUE FOR Commande_id_seq");
            modelBuilder.Entity<Commande>().Property(pm => pm.Id).HasDefaultValueSql("NEXT VALUE FOR ProductImage_id_seq");
        }
    }
}
