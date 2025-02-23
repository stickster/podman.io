% podman-kube-play 1

## NAME

podman-kube-play - Create containers, pods and volumes based on Kubernetes YAML

## SYNOPSIS

**podman kube play** [*options*] _file.yml|-|https://website.io/file.yml_

## DESCRIPTION

**podman kube play** will read in a structured file of Kubernetes YAML. It will then recreate the containers, pods or volumes described in the YAML. Containers within a pod are then started and the ID of the new Pod or the name of the new Volume is output. If the yaml file is specified as "-" then `podman kube play` will read the YAML file from stdin.
The input can also be a URL that points to a YAML file such as https://podman.io/demo.yml. `podman kube play` will read the YAML from the URL and create pods and containers from it.

Using the `--down` command line option, it is also capable of tearing down the pods created by a previous run of `podman kube play`.

Using the `--replace` command line option, it will tear down the pods(if any) created by a previous run of `podman kube play` and recreate the pods with the Kubernetes YAML file.

Ideally the input file would be one created by Podman (see podman-kube-generate(1)). This would guarantee a smooth import and expected results.

Currently, the supported Kubernetes kinds are:

- Pod
- Deployment
- PersistentVolumeClaim
- ConfigMap
- Secret

`Kubernetes Pods or Deployments`

Only three volume types are supported by kube play, the _hostPath_, _emptyDir_, and _persistentVolumeClaim_ volume types.

- When using the _hostPath_ volume type, only the _default (empty)_, _DirectoryOrCreate_, _Directory_, _FileOrCreate_, _File_, _Socket_, _CharDevice_ and _BlockDevice_ subtypes are supported. Podman interprets the value of _hostPath_ _path_ as a file path when it contains at least one forward slash, otherwise Podman treats the value as the name of a named volume.
- When using a _persistentVolumeClaim_, the value for _claimName_ is the name for the Podman named volume.
- When using an _emptyDir_ volume, Podman creates an anonymous volume that is attached the containers running inside the pod and is deleted once the pod is removed.

Note: The default restart policy for containers is `always`. You can change the default by setting the `restartPolicy` field in the spec.

Note: When playing a kube YAML with init containers, the init container will be created with init type value `once`. To change the default type, use the `io.podman.annotations.init.container.type` annotation to set the type to `always`.

Note: _hostPath_ volume types created by kube play will be given an SELinux shared label (z), bind mounts are not relabeled (use `chcon -t container_file_t -R <directory>`).

Note: If the `:latest` tag is used, Podman will attempt to pull the image from a registry. If the image was built locally with Podman or Buildah, it will have `localhost` as the domain, in that case, Podman will use the image from the local store even if it has the `:latest` tag.

Note: The command `podman play kube` is an alias of `podman kube play`, and will perform the same function.

Note: The command `podman kube down` can be used to stop and remove pods or containers based on the same Kubernetes YAML used
by `podman kube play` to create them.

`Kubernetes PersistentVolumeClaims`

A Kubernetes PersistentVolumeClaim represents a Podman named volume. Only the PersistentVolumeClaim name is required by Podman to create a volume. Kubernetes annotations can be used to make use of the available options for Podman volumes.

- volume.podman.io/driver
- volume.podman.io/device
- volume.podman.io/type
- volume.podman.io/uid
- volume.podman.io/gid
- volume.podman.io/mount-options
- volume.podman.io/import-source

Use `volume.podman.io/import-source` to import the contents of the tarball (.tar, .tar.gz, .tgz, .bzip, .tar.xz, .txz) specified in the annotation's value into the created Podman volume

Kube play is capable of building images on the fly given the correct directory layout and Containerfiles. This
option is not available for remote clients, including Mac and Windows (excluding WSL2) machines, yet. Consider the following excerpt from a YAML file:

```
apiVersion: v1
kind: Pod
metadata:
...
spec:
  containers:
  - command:
    - top
    - name: container
      value: podman
    image: foobar
...
```

If there is a directory named `foobar` in the current working directory with a file named `Containerfile` or `Dockerfile`,
Podman kube play will build that image and name it `foobar`. An example directory structure for this example would look
like:

```
|- mykubefiles
    |- myplayfile.yaml
    |- foobar
         |- Containerfile
```

The build will consider `foobar` to be the context directory for the build. If there is an image in local storage
called `foobar`, the image will not be built unless the `--build` flag is used. Use `--build=false` to completely
disable builds.

`Kubernetes ConfigMap`

Kubernetes ConfigMap can be referred as a source of environment variables or volumes in Pods or Deployments.
ConfigMaps aren't a standalone object in Podman; instead, when a container uses a ConfigMap, Podman will create environment variables or volumes as needed.

For example, the following YAML document defines a ConfigMap and then uses it in a Pod:

```
apiVersion: v1
kind: ConfigMap
metadata:
  name: foo
data:
    FOO: bar
---
apiVersion: v1
kind: Pod
metadata:
  name: foobar
spec:
  containers:
  - command:
    - top
    name: container-1
    image: foobar
    envFrom:
    - configMapRef:
        name: foo
        optional: false
```

and as a result environment variable `FOO` will be set to `bar` for container `container-1`.

`Kubernetes Secret`

Kubernetes Secret represents a Podman named secret. The Kubernetes Secret is saved as a whole and may be referred to as a source of environment variables or volumes in Pods or Deployments.

For example, the following YAML document defines a Secret and then uses it in a Pod:

```
kind: Secret
apiVersion: v1
metadata:
  name: foo
data:
  foo: YmFy # base64 for bar
---
apiVersion: v1
kind: Pod
metadata:
  name: foobar
spec:
  containers:
  - command:
    - top
    name: container-1
    image: foobar
    env:
    - name: FOO
      valueFrom:
        secretKeyRef:
          name: foo
          key: foo
```

and as a result environment variable `FOO` will be set to `bar` for container `container-1`.

## OPTIONS

@@option annotation.container

@@option authfile

#### **--build**

Build images even if they are found in the local storage. Use `--build=false` to completely disable builds. (This option is not available with the remote Podman client)

@@option cert-dir

#### **--configmap**=_path_

Use Kubernetes configmap YAML at path to provide a source for environment variable values within the containers of the pod. (This option is not available with the remote Podman client)

Note: The _--configmap_ option can be used multiple times or a comma-separated list of paths can be used to pass multiple Kubernetes configmap YAMLs.

#### **--context-dir**=_path_

Use _path_ as the build context directory for each image. Requires --build option be true. (This option is not available with the remote Podman client)

@@option creds

#### **--force**

Tear down the volumes linked to the PersistentVolumeClaims as part of --down

#### **--help**, **-h**

Print usage statement

#### **--ip**=_IP address_

Assign a static ip address to the pod. This option can be specified several times when kube play creates more than one pod.
Note: When joining multiple networks use the **--network name:ip=\<ip\>** syntax.

#### **--log-driver**=_driver_

Set logging driver for all created containers.

@@option log-opt

#### **--mac-address**=_MAC address_

Assign a static mac address to the pod. This option can be specified several times when kube play creates more than one pod.
Note: When joining multiple networks use the **--network name:mac=\<mac\>** syntax.

@@option network

When no network option is specified and _host_ network mode is not configured in the YAML file, a new network stack is created and pods are attached to it making possible pod to pod communication.

@@option no-hosts

This option conflicts with host added in the Kubernetes YAML.

#### **--publish**=_[[ip:][hostPort]:]containerPort[/protocol]_

Define or override a port definition in the YAML file.

The lists of ports in the YAML file and the command line are merged. Matching is done by using the **containerPort** field.
If **containerPort** exists in both the YAML file and the option, the latter takes precedence.

#### **--quiet**, **-q**

Suppress output information when pulling images

#### **--replace**

Tears down the pods created by a previous run of `kube play` and recreates the pods. This option is used to keep the existing pods up to date based upon the Kubernetes YAML.

#### **--seccomp-profile-root**=_path_

Directory path for seccomp profiles (default: "/var/lib/kubelet/seccomp"). (This option is not available with the remote Podman client, including Mac and Windows (excluding WSL2) machines)

#### **--start**

Start the pod after creating it, set to false to only create it.

@@option tls-verify

@@option userns.container

#### **--wait**, **-w**

Run pods and containers in the foreground. Default is false.

At any time you can run `podman pod ps` in another shell to view a list of
the running pods and containers.

When attached in the tty mode, you can kill the pods and containers by pressing
Ctrl-C or receiving any other interrupt signals.

All pods, containers, and volumes created with `podman kube play` will be removed
upon exit.

## EXAMPLES

Recreate the pod and containers as described in a file called `demo.yml`

```
$ podman kube play demo.yml
52182811df2b1e73f36476003a66ec872101ea59034ac0d4d3a7b40903b955a6
```

Recreate the pod and containers as described in a file `demo.yml` sent to stdin

```
$ cat demo.yml | podman kube play -
52182811df2b1e73f36476003a66ec872101ea59034ac0d4d3a7b40903b955a6

```

Teardown the pod and containers as described in a file `demo.yml`

```
$  podman kube play --down demo.yml
Pods stopped:
52182811df2b1e73f36476003a66ec872101ea59034ac0d4d3a7b40903b955a6
Pods removed:
52182811df2b1e73f36476003a66ec872101ea59034ac0d4d3a7b40903b955a6
```

Provide `configmap-foo.yml` and `configmap-bar.yml` as sources for environment variables within the containers.

```
$ podman kube play demo.yml --configmap configmap-foo.yml,configmap-bar.yml
52182811df2b1e73f36476003a66ec872101ea59034ac0d4d3a7b40903b955a6

$ podman kube play demo.yml --configmap configmap-foo.yml --configmap configmap-bar.yml
52182811df2b1e73f36476003a66ec872101ea59034ac0d4d3a7b40903b955a6
```

Create a pod connected to two networks (called net1 and net2) with a static ip

```
$ podman kube play demo.yml --network net1:ip=10.89.5 --network net2:ip=10.8900
52182811df2b1e73f36476003a66ec872101ea59034ac0d4d3a7b40903b955a6
```

Please take into account that networks must be created first using podman-network-create(1).

Create and teardown from a URL pointing to a YAML file

```
$ podman kube play https://podman.io/demo.yml
52182811df2b1e73f36476003a66ec872101ea59034ac0d4d3a7b40903b955a6

$ podman kube play --down https://podman.io/demo.yml
Pods stopped:
52182811df2b1e73f36476003a66ec872101ea59034ac0d4d3a7b40903b955a6
Pods removed:
52182811df2b1e73f36476003a66ec872101ea59034ac0d4d3a7b40903b955a6
```

`podman kube play --down` will not work with a URL if the YAML file the URL points to
has been changed or altered.

@@include ../../kubernetes_support.md

## SEE ALSO

**[podman(1)](podman.md)**, **[podman-kube(1)](commands/podman-kube/podman-kube.md)**, **[podman-kube-down(1)](commands/podman-kube/podman-kube-down.md)**, **[podman-network-create(1)](commands/podman-network/podman-network-create.md)**, **[podman-kube-generate(1)](commands/podman-kube/podman-kube-generate.md)**, **[containers-certs.d(5)](https://github.com/containers/image/blob/main/docs/containers-certs.d.5.md)**
