﻿using System;
using Abp.Dependency;
using AcmStatisticsBackend.EntityFrameworkCore;
using AcmStatisticsBackend.Identity;
using Castle.MicroKernel.Registration;
using Castle.Windsor.MsDependencyInjection;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace AcmStatisticsBackend.Tests.DependencyInjection
{
    public class ServiceCollectionRegistrar : IDisposable
    {
        private SqliteConnection _connection;

        public void Register(IIocManager iocManager)
        {
            var services = new ServiceCollection();

            IdentityRegistrar.Register(services);

            services.AddEntityFrameworkSqlite();

            var serviceProvider = WindsorRegistrationHelper.CreateServiceProvider(iocManager.IocContainer, services);

            // In-memory database only exists while the connection is open
            _connection = new SqliteConnection("DataSource=:memory:");
            _connection.Open();

            var builder = new DbContextOptionsBuilder<AcmStatisticsBackendDbContext>();
            builder.UseSqlite(_connection).UseInternalServiceProvider(serviceProvider);

            iocManager.IocContainer.Register(
                Component
                    .For<DbContextOptions<AcmStatisticsBackendDbContext>>()
                    .Instance(builder.Options)
                    .LifestyleSingleton());
        }

        public void Dispose()
        {
            _connection?.Dispose();
        }
    }
}
