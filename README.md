# test_sas

- [JavaScript;](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [React Native;](https://reactnative.dev/)
- [React Hooks;](https://pt-br.reactjs.org/docs/hooks-intro.html)
- [Styled Components;](https://styled-components.com/)
- [Redux;](https://redux.js.org/)
- [Redux Saga;](https://redux-saga.js.org/)
- [Git como ferramenta de versionamento;](https://git-scm.com/doc)
- [Yarn;](https://classic.yarnpkg.com/en/docs/)
- [Android Studio](https://git-scm.com/doc) para configurações do emulador Android;
- [VsCode](https://code.visualstudio.com/) como IDE de desenvolvimento;
- [Reactotron](https://github.com/infinitered/reactotron) para debug;
- [XCode](https://developer.apple.com/xcode/) para gerar versões para loja Apple e desenvolvimento de funcionalidades nativas IOS ;

## AMBIENTE REACT NATIVE

|     Windows      |      Linux       |      MacOS       |
| :--------------: | :--------------: | :--------------: |
|      NodeJS      |      NodeJS      |      NodeJS      |
|      JDK 8       |      JDK 8       |      JDK 8       |
|   SDK Android    |   SDK Android    |   SDK Android    |
| React Native CLI | React Native CLI | React Native CLI |
|   SDK Android    |   SDK Android    |   SDK Android    |
|    Chocolatey    |        -         |        -         |
|        -         |       CURL       |        -         |
|      Python      |        -         |        -         |
|        -         |     Watchman     |     Watchman     |

Com o intuito de não extender, nem deixar o tutoriol repetitivo, separamos um artigo da [Rocketseat](https://rocketseat.com.br/), para auxiliar na instalação de todo o ambiente React Native citado.

## CONFIGURAÇÃO ANDROID STUDIO

Normalmente, só é necessário o download e configuração do SDK do Android, mas para algumas funcionalidades específicas e principalmente emuladores, é necessário instalar a IDE do Android.

Para isso, acesse o tutorial de instalação do [Android Studio](https://developer.android.com/studio) para o seu sistema operacional.

Após a instalação, é necessário a [criação do emuladador](https://developer.android.com/studio/run/managing-avds?hl=pt-br&authuser=1).

## BRANCHES

- **feature/**: prefixo para o desenvolvimento de toda funcionalidade, junto ao código da atividade no JIRA. Ex: feature/MHC10-12

- [**develop**] branch que servirá de base para a criação de novas funcionalidades.

**Todas as branches de feature devem partir da develop.**

## SCRIPTS DO PROJETO

Todos os scripts podem ser vistos no arquivo _package.json_, na raiz do projeto.
Algumas delas:

- **android:dev**: "ENVFILE=.env.dev react-native run-android",
- **win-android:dev**: "SET ENVFILE=.env.dev && react-native run-android",
- ** release:dev**: "cd android && ENVFILE=.env.dev ./gradlew app:assembleRelease",
- **win-release:dev**: "cd android && SET ENVFILE=.env.dev && ./gradlew app:assembleRelease",
- **install-release**: "cd android && adb install app/build/outputs/apk/release/app-release.apk",
- **ios**: "react-native run-ios",
- **gc**: "cd android && ENVFILE=.env.dev ./gradlew clean",
- **win-gc**: "cd android && SET ENVFILE=.env.dev && gradlew clean",
- **start**: "react-native start",
- **test**: "jest",
- **lint**: "eslint .",
- **pod**: "cd ios && pod install"

## RODANDO O APP
- Abra o projeto no VsCode

- Entre na branch de desenvolvimento:
  `$ git checkout develop`

- Baixe as dependências do projeto:
  `$ yarn`

- Configure o Reactotron:

  - Na raiz do projeto, no arquivo **.env.dev**, e apontar o seu endereço de IP para a variável **REACTOTRON_IP=**
    Exemplo: `REACTOTRON_IP=SeuIpAqui`

- Execute o emulador previamente configurado ou [utilize um dispositivo fisíco conectado via USB](https://react-native.rocketseat.dev/usb/android)

- Entre na raiz do seu projeto via terminal execute o comando :
  `$ yarn android:dev` para MacOs ou Linux / `$yarn win-android:dev` para windows
