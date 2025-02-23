% podman-update 1

## NAME

podman\-update - Updates the cgroup configuration of a given container

## SYNOPSIS

**podman update** [*options*] _container_

**podman container update** [*options*] _container_

## DESCRIPTION

Updates the cgroup configuration of an already existing container. The currently supported options are a subset of the
podman create/run resource limits options. These new options are non-persistent and only last for the current execution of the container; the configuration will be honored on its next run.
This means that this command can only be executed on an already running container and the changes made will be erased the next time the container is stopped and restarted, this is to ensure immutability.
This command takes one argument, a container name or ID, alongside the resource flags to modify the cgroup.

## OPTIONS

@@option blkio-weight

@@option blkio-weight-device

@@option cpu-period

@@option cpu-quota

@@option cpu-rt-period

@@option cpu-rt-runtime

@@option cpu-shares

@@option cpus.container

@@option cpuset-cpus

@@option cpuset-mems

@@option device-read-bps

@@option device-read-iops

@@option device-write-bps

@@option device-write-iops

@@option memory

@@option memory-reservation

@@option memory-swap

@@option memory-swappiness

@@option pids-limit

## EXAMPLEs

update a container with a new cpu quota and period

```
podman update --cpus=5 myCtr
```

update a container with all available options for cgroups v2

```
podman update --cpus 5 --cpuset-cpus 0 --cpu-shares 123 --cpuset-mems 0 --memory 1G --memory-swap 2G --memory-reservation 2G --blkio-weight-device /dev/zero:123 --blkio-weight 123 --device-read-bps /dev/zero:10mb --device-write-bps /dev/zero:10mb --device-read-iops /dev/zero:1000 --device-write-iops /dev/zero:1000 --pids-limit 123 ctrID
```

update a container with all available options for cgroups v1

```
podman update --cpus 5 --cpuset-cpus 0 --cpu-shares 123 --cpuset-mems 0 --memory 1G --memory-swap 2G --memory-reservation 2G --memory-swappiness 50 --pids-limit 123 ctrID
```

## SEE ALSO

**[podman(1)](podman.md)**, **[podman-create(1)](commands/podman-create.md)**, **[podman-run(1)](commands/podman-run.md)**

## HISTORY

August 2022, Originally written by Charlie Doern <cdoern@redhat.com>
